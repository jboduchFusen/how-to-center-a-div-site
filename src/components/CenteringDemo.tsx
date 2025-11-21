
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface CenteringDemoProps {
  title: string;
  description: string;
  cssCode: string;
  htmlCode: string;
  method: string;
}

export function CenteringDemo({ title, description, cssCode, htmlCode, method }: CenteringDemoProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getDemoStyle = (): React.CSSProperties => {
    switch (method) {
      case 'flexbox':
        return { display: 'flex', justifyContent: 'center', alignItems: 'center' };
      case 'grid':
        return { display: 'grid', placeItems: 'center' };
      case 'absolute':
        return { position: 'relative' };
      case 'margin':
        return { display: 'flex', flexDirection: 'column' };
      case 'transform':
        return { position: 'relative' };
      case 'text-align':
        return { textAlign: 'center' };
      default:
        return {};
    }
  };

  const getBoxStyle = (): React.CSSProperties => {
    switch (method) {
      case 'absolute':
        return { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
      case 'margin':
        return { margin: '0 auto', width: 'fit-content' };
      case 'transform':
        return { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
      case 'text-align':
        return { display: 'inline-block' };
      default:
        return {};
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Live Demo */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">Live Demo</h3>
          <div className="demo-container" style={getDemoStyle()}>
            <div className="demo-box" style={getBoxStyle()}>
              Centered Div
            </div>
          </div>
        </div>

        {/* CSS Code */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">CSS</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(cssCode)}
              className="h-8"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </>
              )}
            </Button>
          </div>
          <pre className="code-block">
            <code>{cssCode}</code>
          </pre>
        </div>

        {/* HTML Code */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">HTML</h3>
          <pre className="code-block">
            <code>{htmlCode}</code>
          </pre>
        </div>
      </CardContent>
    </Card>
  );
}