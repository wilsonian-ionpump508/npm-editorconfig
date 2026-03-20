#!/usr/bin/env node

// Author: Igor Dimitrijević (@igorskyflyer)

/** biome-ignore-all lint/suspicious/noConsole: needed for CLI output */
import { copyFileSync, existsSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { createInterface, type Interface } from 'node:readline'

const dest: string = resolve(process.cwd(), '.editorconfig')
const src: string = join(import.meta.dirname, '..', '.editorconfig')

function onError(error: unknown): void {
  const message: string = error instanceof Error ? error.message : String(error)

  console.error(`❌ Failed: ${message}`)
  process.exit(1)
}

try {
  if (existsSync(dest)) {
    const rl: Interface = createInterface({
      input: process.stdin,
      output: process.stdout
    })

    rl.question(
      '⚠️ .editorconfig already exists. Overwrite? (y/N)  ',
      (answer: string) => {
        try {
          rl.close()

          if (answer.toLowerCase() === 'y') {
            copyFileSync(src, dest)
            console.log('✅ .editorconfig updated successfully!')
          } else {
            console.log('⏭️  Skipped.')
          }
        } catch (error) {
          onError(error)
        }
      }
    )
  } else {
    copyFileSync(src, dest)
    console.log('✅ .editorconfig added to the project!')
  }
} catch (error) {
  onError(error)
}
