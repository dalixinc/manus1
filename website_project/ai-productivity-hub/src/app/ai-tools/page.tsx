"use client"

import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"

export default function AITools() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="py-12 md:py-24">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight neon-text">
            AI Tools for Productivity
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Discover powerful AI tools that can help you work smarter, faster, and more efficiently
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Popular AI Productivity Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Tool 1 */}
          <div className="card-ai rounded-lg border p-6 transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--card-ai-border)/0.2)]">
              <Zap className="h-6 w-6 text-[hsl(var(--card-ai-border))]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Writing Assistants</h3>
            <p className="text-muted-foreground mb-4">
              Tools that help you draft, edit, and improve your writing with AI-powered suggestions.
            </p>
            <Link 
              href="/ai-tools/writing-assistants" 
              className="inline-flex items-center text-[hsl(var(--card-ai-border))] hover:underline"
            >
              Learn More
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {/* Tool 2 */}
          <div className="card-productivity rounded-lg border p-6 transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--card-productivity-border)/0.2)]">
              <Zap className="h-6 w-6 text-[hsl(var(--card-productivity-border))]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Research Assistants</h3>
            <p className="text-muted-foreground mb-4">
              Tools that help you gather, analyze, and synthesize information from various sources.
            </p>
            <Link 
              href="/ai-tools/research-assistants" 
              className="inline-flex items-center text-[hsl(var(--card-productivity-border))] hover:underline"
            >
              Learn More
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {/* Tool 3 */}
          <div className="card-prompts rounded-lg border p-6 transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--card-prompts-border)/0.2)]">
              <Zap className="h-6 w-6 text-[hsl(var(--card-prompts-border))]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Code Assistants</h3>
            <p className="text-muted-foreground mb-4">
              Tools that help you write, debug, and optimize code with AI-powered suggestions.
            </p>
            <Link 
              href="/ai-tools/code-assistants" 
              className="inline-flex items-center text-[hsl(var(--card-prompts-border))] hover:underline"
            >
              Learn More
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {/* Tool 4 */}
          <div className="card-tools rounded-lg border p-6 transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--card-tools-border)/0.2)]">
              <Zap className="h-6 w-6 text-[hsl(var(--card-tools-border))]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Image Generators</h3>
            <p className="text-muted-foreground mb-4">
              Tools that help you create and edit images with AI-powered generation and manipulation.
            </p>
            <Link 
              href="/ai-tools/image-generators" 
              className="inline-flex items-center text-[hsl(var(--card-tools-border))] hover:underline"
            >
              Learn More
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {/* Tool 5 */}
          <div className="card-ai rounded-lg border p-6 transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--card-ai-border)/0.2)]">
              <Zap className="h-6 w-6 text-[hsl(var(--card-ai-border))]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Meeting Assistants</h3>
            <p className="text-muted-foreground mb-4">
              Tools that help you transcribe, summarize, and extract action items from meetings.
            </p>
            <Link 
              href="/ai-tools/meeting-assistants" 
              className="inline-flex items-center text-[hsl(var(--card-ai-border))] hover:underline"
            >
              Learn More
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {/* Tool 6 */}
          <div className="card-productivity rounded-lg border p-6 transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--card-productivity-border)/0.2)]">
              <Zap className="h-6 w-6 text-[hsl(var(--card-productivity-border))]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Task Managers</h3>
            <p className="text-muted-foreground mb-4">
              Tools that help you organize, prioritize, and manage your tasks with AI-powered insights.
            </p>
            <Link 
              href="/ai-tools/task-managers" 
              className="inline-flex items-center text-[hsl(var(--card-productivity-border))] hover:underline"
            >
              Learn More
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">How to Choose the Right AI Tools</h2>
        
        <div className="space-y-6">
          <p className="text-lg">
            With so many AI tools available, it can be challenging to determine which ones will truly enhance your productivity. 
            Here are some factors to consider when selecting AI tools for your workflow:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-3">Identify Your Needs</h3>
              <p className="text-muted-foreground">
                Start by identifying the specific tasks or processes that consume most of your time or create bottlenecks in your workflow.
              </p>
            </div>
            
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-3">Evaluate Integration</h3>
              <p className="text-muted-foreground">
                Choose tools that integrate well with your existing workflow and other applications you use regularly.
              </p>
            </div>
            
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-3">Consider Learning Curve</h3>
              <p className="text-muted-foreground">
                Assess how much time and effort it will take to learn and effectively use the tool compared to the productivity gains.
              </p>
            </div>
            
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-3">Check Reliability</h3>
              <p className="text-muted-foreground">
                Research the tool's accuracy, consistency, and reliability, especially for tasks where errors could be costly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-12">
        <div className="rounded-lg bg-primary/5 p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Productivity with AI?</h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Explore our detailed guides on each tool category to find the perfect AI assistants for your workflow.
          </p>
          <Link 
            href="/ai-tools/getting-started" 
            className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 neon-glow"
          >
            Get Started Guide
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
