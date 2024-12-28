"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface NotAvailableDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function NotAvailableDialog({ isOpen, onClose }: NotAvailableDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Coming Soon!</DialogTitle>
          <DialogDescription>
            We&apos;re working hard to bring Decaff to the App Store. Stay tuned for updates!
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end">
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
} 