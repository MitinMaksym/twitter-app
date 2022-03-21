import { Breakpoint, Dialog, DialogContent, DialogTitle, } from "@mui/material"

type ModalProps = {
  title: string
  open: boolean
  children: React.ReactNode,
  width?: Breakpoint
  onClose: () => void
}

export const Modal = (props: ModalProps) => {
  const { open, title, children, width, onClose } = props
  return (
    <Dialog open={open} onClose={onClose} maxWidth={width || "xs"}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  )
}
