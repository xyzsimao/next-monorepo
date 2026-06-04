import { spawn } from "child_process"
import { promises as fs } from "fs"
import path from "path"
 
import { registrySchema, type RegistryItem } from "shadcn/schema"
// import {
//   createStyleMap,
//   transformDirection,
//   transformIcons,
//   transformStyle,
// } from "shadcn/utils"
// import { Project, ScriptKind } from "ts-morph"

// import { getAllBlocks } from "@/lib/blocks"
// import { legacyStyles } from "@/registry/_legacy-styles"
import { BASE_COLORS } from "@/registry/base-colors"
import { BASES, type Base } from "@/registry/bases"
import { PRESETS } from "@/registry/config"
import { STYLES } from "@/registry/styles"

// Collect paths for batch prettier formatting at the end.
const prettierPaths: string[] = []

try{
  const totalStart = performance.now()

  console.log("🏗️ Building bases...")
//   await buildBasesIndex(Array.from(BASES))
//   await buildBases(Array.from(BASES))

//   // Format base files before building styles so the JSON output contains formatted code.
//   const baseDirs = Array.from(BASES).flatMap((base) =>
//     STYLES.map((style) =>
//       path.join(process.cwd(), `registry/${base.name}-${style.name}`)
//     )
//   )
//   console.log("\n✨ Formatting base files...")
//   await batchPrettier(baseDirs)

//   const stylesToBuild = getStylesToBuild()

//   // Build index for legacy styles and whitelisted base-style combinations.
//   console.log(`📦 Building registry/__index__.tsx...`)
//   const stylesForIndex = WHITELISTED_STYLES.map((name) => ({
//     name,
//     title: name,
//   }))
//   await buildRegistryIndex(stylesForIndex)

//   console.log("💅 Building styles...")
//   // Build all styles in parallel.
//   await Promise.all(
//     stylesToBuild.map(async (style) => {
//       await buildRegistryJsonFile(style.name)
//       await buildRegistry(style.name)
//       console.log(`   ✅ ${style.name}`)
//     })
//   )

//   console.log("\n🗂️ Building registry/__blocks__.json...")
//   await buildBlocksIndex()

  console.log("\n⚙️ Building public/r/config.json...")
  await buildConfig()

//   // Copy UI to examples before cleanup.
//   console.log("\n📋 Copying UI to examples...")
//   await copyUIToExamples()

//   // Build RTL variants of examples.
//   console.log("\n🔄 Building RTL examples...")
//   await buildRtlExamples()

//   console.log("\n📦 Building public/r/index.json...")
//   await buildIndex()

//   console.log("\n📋 Building public/r/registries.json...")
//   await buildRegistriesJson()

//   console.log("\n🎨 Building public/r/colors...")
//   await buildColors()

//   // Batch format all collected files with prettier at the end.
//   if (prettierPaths.length > 0) {
//     console.log(`\n✨ Formatting ${prettierPaths.length} files...`)
//     await batchPrettier(prettierPaths)
//   }

//   // Clean up intermediate files and generated base directories.
//   console.log("\n🧹 Cleaning up...")
//   await cleanUp(stylesToBuild)

  const elapsed = ((performance.now() - totalStart) / 1000).toFixed(2)
  console.log(`\n✅ Build complete in ${elapsed}s!`)
} catch (error) {
  console.error(error)
  process.exit(1)
}

async function buildConfig() {
  const config = { presets: PRESETS }
  const outputPath = path.join(process.cwd(), "public/r/config.json")
  await fs.writeFile(outputPath, JSON.stringify(config, null, 2))
  prettierPaths.push(outputPath)
}
