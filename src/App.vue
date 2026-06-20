<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AbstractSection from './components/AbstractSection.vue'
import DatasetSection from './components/DatasetSection.vue'
import PipelineSection from './components/PipelineSection.vue'
import DemoSection from './components/DemoSection.vue'
import BenchmarkSection from './components/BenchmarkSection.vue'
import ResultsSection from './components/ResultsSection.vue'
import DownloadSection from './components/DownloadSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <AbstractSection />
    <DatasetSection />
    <PipelineSection />
    <DemoSection />
    <BenchmarkSection />
    <ResultsSection />
    <DownloadSection />
  </main>
  <SiteFooter />
</template>
