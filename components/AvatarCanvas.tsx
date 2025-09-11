"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { Suspense } from "react"
import { Card, CardContent } from "@/components/ui/card"
function Avatar() {
  const { scene } = useGLTF("https://models.readyplayer.me/68c2aa2e6462b71c48402de8.glb")
  return <primitive object={scene} scale={2} position={[0, -1, 0]} />
}

function AvatarLoader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  )
}

export default function AvatarCanvas() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="h-80 bg-gradient-to-br from-primary/5 to-primary/10">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Suspense fallback={<AvatarLoader />}>
              <Avatar />
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>
        <div className="p-4 text-center">
          <p className="text-sm text-muted-foreground">Interactive 3D Avatar</p>
          <p className="text-xs text-muted-foreground mt-1">Click and drag to rotate</p>
        </div>
      </CardContent>
    </Card>
  )
}
