"use client";

import { Modal } from "@/components/ui/modal";
import { ModalProvider } from "@/providers/modal-provider";

export default function Home() {
  return (
    <main>
      <Modal title="test" description="test" isOpen onClose={() => {}}>
        Children
      </Modal>
    </main>
  );
}
