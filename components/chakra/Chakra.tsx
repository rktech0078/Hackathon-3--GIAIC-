"use client";
import React from 'react'

import { Button } from "@chakra-ui/react"
import { toaster } from "@/components/ui/toaster"
import { Alert } from "@/components/ui/alert"

import { DialogContext } from "@chakra-ui/react"
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogRoot,
    DialogTrigger,
} from "@/components/ui/dialog"

const Chakra = () => {
    return (
        <>
            <div>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                        toaster.create({
                            description: "File saved successfully",
                            type: "info",
                        })
                    }
                >
                    Show Toast
                </Button>

                <Alert status="info" title="This is the alert title" />


                <DialogRoot>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                            Open Dialog
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogContext>
                            {(store) => (
                                <>
                                    <DialogBody>
                                        <p>Dialog is open: {store.open ? "true" : "false"}</p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                        <button onClick={() => store.setOpen(false)}>Close</button>
                                    </DialogBody>
                                </>
                            )}
                        </DialogContext>
                        <DialogCloseTrigger />
                    </DialogContent>
                </DialogRoot>

            </div>
        </>
    )
}

export default Chakra