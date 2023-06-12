"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export function ProgressBar() {
    const [progress, setProgress] = useState(0);


    useEffect(() => {
        
setProgress(100)
    }
    , [progress]);

    return <Progress className="w-full" value={progress} />;
}
