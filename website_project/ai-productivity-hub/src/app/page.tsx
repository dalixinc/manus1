"use client"

import Link from "next/link"
import { ArrowRight, Brain, Lightbulb, MessageSquare, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="py-12 md:py-24">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight neon-text">
            Boost Your Productivity with AI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Discover practical ways to leverage artificial intelligence to enhance your workflow, 
            save time, and accomplish more in your daily tasks.
          </p>
          <div className="flex justify-center gap-4 pt-6">
            <Link 
              href="/ai-tools" 
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 neon-glow"
            >
              Explore AI Tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              href="/prompt-engineering" 
              className="inline-flex items-center px-6 py-3 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Learn Prompt Engineering
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">How AI Can Improve Your Productivity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* AI Tools Card */}
          <div className="card-ai rounded-lg border p-6 transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--card-ai-border)/0.2)]">
              <Brain className="h-6 w-6 text-[hsl(var(--card-ai-border))]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Tools</h3>
            <p className="text-muted-foreground mb-4">
              Discover the best AI tools to automate repetitive tasks, analyze data, and generate content.
            </p>
            <Link 
              href="/ai-tools" 
              className="inline-flex items-center text-[hsl(var(--card-ai-border))] hover:underline"
            >
              Explore Tools
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Productivity Tips Card */}
          <div className="card-productivity rounded-lg border p-6 transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--card-productivity-border)/0.2)]">
              <Zap className="h-6 w-6 text-[hsl(var(--card-productivity-border))]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Productivity Strategies</h3>
            <p className="text-muted-foreground mb-4">
              Learn how to integrate AI into your workflow to maximize efficiency and focus on high-value tasks.
            </p>
            <Link 
              href="/productivity-tips" 
              className="inline-flex items-center text-[hsl(var(--card-productivity-border))] hover:underline"
            >
              Boost Productivity
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Prompt Engineering Card */}
          <div className="card-prompts rounded-lg border p-6 transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--card-prompts-border)/0.2)]">
              <MessageSquare className="h-6 w-6 text-[hsl(var(--card-prompts-border))]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Prompt Engineering</h3>
            <p className="text-muted-foreground mb-4">
              Master the art of crafting effective prompts to get the best results from AI language models.
            </p>
            <Link 
              href="/prompt-engineering" 
              className="inline-flex items-center text-[hsl(var(--card-prompts-border))] hover:underline"
            >
              Craft Better Prompts
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* AI Use Cases Card */}
          <div className="card-tools rounded-lg border p-6 transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--card-tools-border)/0.2)]">
              <Lightbulb className="h-6 w-6 text-[hsl(var(--card-tools-border))]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Practical Use Cases</h3>
            <p className="text-muted-foreground mb-4">
              Explore real-world examples of how professionals are using AI to transform their work.
            </p>
            <Link 
              href="/use-cases" 
              className="inline-flex items-center text-[hsl(var(--card-tools-border))] hover:underline"
            >
              See Examples
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">The Ultimate Guide to Prompt Engineering</h3>
              <p className="text-muted-foreground mb-4">
                Learn how to craft effective prompts that get you the exact results you need from AI systems.
              </p>
              <Link 
                href="/prompt-engineering/guide" 
                className="inline-flex items-center text-primary hover:underline"
              >
                Read Guide
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">10 AI Tools to Supercharge Your Workflow</h3>
              <p className="text-muted-foreground mb-4">
                Discover the top AI-powered tools that can help you automate tasks and boost your productivity.
              </p>
              <Link 
                href="/ai-tools/top-10" 
                className="inline-flex items-center text-primary hover:underline"
              >
                Explore Tools
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">AI for Content Creation: A Complete Workflow</h3>
              <p className="text-muted-foreground mb-4">
                Learn how to use AI to streamline your content creation process from ideation to publication.
              </p>
              <Link 
                href="/use-cases/content-creation" 
                className="inline-flex items-center text-primary hover:underline"
              >
                View Workflow
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12">
        <div className="rounded-lg bg-primary/5 p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Productivity?</h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Start your journey to enhanced productivity with our comprehensive guides and resources.
          </p>
          <Link 
            href="/getting-started" 
            className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 neon-glow"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
