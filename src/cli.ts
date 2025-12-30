#!/usr/bin/env bun
import { readdir } from "fs/promises";
import { join, resolve } from "path";
import { stat } from "fs/promises";

async function findSpecFiles(dir: string, fileList: string[] = []) {
  const files = await readdir(dir);
  for (const file of files) {
    if (file === "node_modules" || file === "dist" || file === ".git") continue;
    const path = join(dir, file);
    try {
      const s = await stat(path);
      if (s.isDirectory()) {
        await findSpecFiles(path, fileList);
      } else {
        if (file.endsWith(".spec.ts")) {
          fileList.push(path);
        }
      }
    } catch (e) {
      // Ignore access errors
    }
  }
  return fileList;
}

async function main() {
  const cwd = process.cwd();
  console.log(`\n🔍 Scanning for .spec.ts files in ${cwd}...`);

  const files = await findSpecFiles(cwd);

  if (files.length === 0) {
    console.log("⚠️ No .spec.ts files found.");
    process.exit(0);
  }

  console.log(`Found ${files.length} test files.\n`);

  for (const file of files) {
    console.log(`📄 Running: ${file}`);
    try {
      // Dynamic import executes the file content which registers tests via the AtomicCore
      await import(file);
    } catch (e) {
      console.error(`❌ Error importing ${file}:`, e);
    }
  }
}

main().catch((err) => {
  console.error("Fatal Error:", err);
  process.exit(1);
});
