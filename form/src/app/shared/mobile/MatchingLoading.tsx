import React from "react";
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";

export function MatchingLoading() {
  return (
    <div className="w-full flex flex-col gap-3 items-center justify-center py-12">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="size-12"
      >
        <Loader2 
          className="size-full text-[var(--bg-brand)]" 
          strokeWidth={2.5}
        />
      </motion.div>
      <p className="text-body-15 text-[var(--fg-neutral)] text-center">
        업체 매칭 중... 시간이 걸릴 수 있어요
      </p>
    </div>
  );
}