
import { CenteringDemo } from "@/components/CenteringDemo";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Layout, Github } from "lucide-react";

export default function Index() {
  const methods = [
    {
      id: 'flexbox',
      title: '1. Flexbox (Modern & Recommended)',
      description: 'The most popular and flexible method for centering elements. Works in all modern browsers.',
      cssCode: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}`,
      htmlCode: `<div class="container">
  <div class="box">Centered Div</div>
</div>`,
      method: 'flexbox'
    },
    {
      id: 'grid',
      title: '2. CSS Grid (Simplest)',
      description: 'The shortest and most elegant solution using CSS Grid. Just one line of CSS!',
      cssCode: `.container {
  display: grid;
  place-items: center;
  height: 300px;
}`,
      htmlCode: `<div class="container">
  <div class="box">Centered Div</div>
</div>`,
      method: 'grid'
    },
    {
      id: 'absolute',
      title: '3. Absolute Positioning + Transform',
      description: 'Classic method that works everywhere. Great for overlays and modals.',
      cssCode: `.container {
  position: relative;
  height: 300px;
}

.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`,
      htmlCode: `<div class="container">
  <div class="box">Centered Div</div>
</div>`,
      method: 'absolute'
    },
    {
      id: 'margin',
      title: '4. Margin Auto (Horizontal Only)',
      description: 'Simple method for horizontal centering. Requires a defined width.',
      cssCode: `.container {
  height: 300px;
}

.box {
  margin: 0 auto;
  width: fit-content;
}`,
      htmlCode: `<div class="container">
  <div class="box">Centered Div</div>
</div>`,
      method: 'margin'
    },
    {
      id: 'transform',
      title: '5. Position + Transform (No Flexbox)',
      description: 'Alternative to flexbox for older browser support.',
      cssCode: `.container {
  position: relative;
  height: 300px;
}

.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`,
      htmlCode: `<div class="container">
  <div class="box">Centered Div</div>
</div>`,
      method: 'transform'
    },
    {
      id: 'text-align',
      title: '6. Text-Align (Inline Elements)',
      description: 'Works for inline or inline-block elements. Simple but limited.',
      cssCode: `.container {
  text-align: center;
  height: 300px;
}

.box {
  display: inline-block;
}`,
      htmlCode: `<div class="container">
  <div class="box">Centered Div</div>
</div>`,
      method: 'text-align'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Code2 className="h-4 w-4" />
              CSS Tutorial
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              How to Center a Div
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Master 6 different methods to center elements in CSS. From modern Flexbox to classic techniques.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="gap-2">
                <Layout className="h-5 w-5" />
                View Methods
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Github className="h-5 w-5" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Comparison */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Comparison</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border rounded-lg p-6 space-y-2">
              <div className="text-4xl">🏆</div>
              <h3 className="font-semibold text-lg">Best Overall</h3>
              <p className="text-muted-foreground">Flexbox - Modern, flexible, and widely supported</p>
            </div>
            <div className="bg-card border rounded-lg p-6 space-y-2">
              <div className="text-4xl">⚡</div>
              <h3 className="font-semibold text-lg">Simplest</h3>
              <p className="text-muted-foreground">CSS Grid - Just one line: place-items: center</p>
            </div>
            <div className="bg-card border rounded-lg p-6 space-y-2">
              <div className="text-4xl">🎯</div>
              <h3 className="font-semibold text-lg">Most Compatible</h3>
              <p className="text-muted-foreground">Absolute + Transform - Works everywhere</p>
            </div>
          </div>
        </div>
      </div>

      {/* Methods Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">All Methods</h2>
          
          <Tabs defaultValue="flexbox" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
              {methods.map((method) => (
                <TabsTrigger key={method.id} value={method.id} className="text-xs md:text-sm">
                  {method.id.charAt(0).toUpperCase() + method.id.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {methods.map((method) => (
              <TabsContent key={method.id} value={method.id}>
                <CenteringDemo {...method} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center">Pro Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border rounded-lg p-6 space-y-3">
                <h3 className="font-semibold text-lg">✅ When to Use Flexbox</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Centering multiple items</li>
                  <li>• Need responsive layouts</li>
                  <li>• Want fine control over alignment</li>
                  <li>• Modern browser support is fine</li>
                </ul>
              </div>
              <div className="bg-card border rounded-lg p-6 space-y-3">
                <h3 className="font-semibold text-lg">✅ When to Use Grid</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Single centered element</li>
                  <li>• Want the simplest code</li>
                  <li>• Building grid-based layouts</li>
                  <li>• Modern browsers only</li>
                </ul>
              </div>
              <div className="bg-card border rounded-lg p-6 space-y-3">
                <h3 className="font-semibold text-lg">✅ When to Use Absolute</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Overlays and modals</li>
                  <li>• Need to break out of flow</li>
                  <li>• Maximum browser support</li>
                  <li>• Positioning over other content</li>
                </ul>
              </div>
              <div className="bg-card border rounded-lg p-6 space-y-3">
                <h3 className="font-semibold text-lg">✅ When to Use Margin Auto</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Horizontal centering only</li>
                  <li>• Block-level elements</li>
                  <li>• Simple, traditional layouts</li>
                  <li>• Works in all browsers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>Built with React, TypeScript, and Tailwind CSS</p>
          <p className="mt-2">Learn more about CSS centering techniques</p>
        </div>
      </footer>
    </div>
  );
}