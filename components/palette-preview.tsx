"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, Zap, Shield, Layers } from "lucide-react";

export function PalettePreview() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="max-w-5xl mx-auto space-y-10 py-16 px-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Bitcoin Agent – Design System Preview
        </h1>
        <p className="text-muted-foreground text-lg">Dark Web3 UI Palette</p>
      </div>

      <Separator />

      {/* Palette Swatches */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Color Palette
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Dark Navy", hex: "#070F2B", bg: "bg-[#070F2B]", border: true },
            { label: "Deep Indigo", hex: "#1B1A55", bg: "bg-[#1B1A55]", border: false },
            { label: "Muted Blue", hex: "#535C91", bg: "bg-[#535C91]", border: false },
            { label: "Soft Lavender", hex: "#9290C3", bg: "bg-[#9290C3]", border: false },
          ].map(({ label, hex, bg, border }) => (
            <div key={hex} className="space-y-2">
              <div
                className={`h-16 rounded-lg ${bg} ${border ? "border border-border" : ""}`}
              />
              <div>
                <p className="text-sm font-medium text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground font-mono">{hex}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Buttons
        </h2>
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      <Separator />

      {/* Cards */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Cards
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                Performance
              </CardTitle>
              <CardDescription>Real-time execution metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">99.8%</p>
              <p className="text-xs text-muted-foreground mt-1">Uptime last 30 days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                Security
              </CardTitle>
              <CardDescription>MPC wallet protection</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">2/3</p>
              <p className="text-xs text-muted-foreground mt-1">Multisig threshold</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-primary" />
                Transactions
              </CardTitle>
              <CardDescription>On-chain activity</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">1,247</p>
              <p className="text-xs text-muted-foreground mt-1">Total processed</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Input */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Input
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            placeholder="Enter BTC address..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Input placeholder="Amount in satoshi..." type="number" />
        </div>
      </section>

      <Separator />

      {/* Badges */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Badges
        </h2>
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </section>

      <Separator />

      {/* Alert */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Alert
        </h2>
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Network Confirmation Required</AlertTitle>
          <AlertDescription>
            Your transaction is pending 3 confirmations before it is finalized on-chain.
          </AlertDescription>
        </Alert>
      </section>

      <Separator />

      {/* Tabs */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Tabs
        </h2>
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground text-sm">
                  Portfolio overview and real-time balance across all connected wallets.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="transactions">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground text-sm">
                  Full transaction history with filtering and export capabilities.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground text-sm">
                  Agent configuration, signing policies, and notification preferences.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <Separator />

      {/* Dialog */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Dialog
        </h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Transaction</DialogTitle>
              <DialogDescription>
                You are about to sign and broadcast a Bitcoin transaction. This action cannot be
                undone once confirmed on-chain.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Recipient</span>
                <span className="font-mono text-foreground">bc1q...x7f2</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Amount</span>
                <span className="font-mono text-foreground">0.005 BTC</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Network Fee</span>
                <span className="font-mono text-foreground">~1,200 sats</span>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Confirm &amp; Sign</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  );
}
