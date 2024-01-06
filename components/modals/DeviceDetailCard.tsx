"use client";
import React, { Component, ComponentProps, PropsWithChildren } from "react";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
} from "@nextui-org/react";
import DeviceCard from "../cards/DeviceCard";
import TableDevice from "../table/TableDevice";

interface DeviceDetailCardProps {
	device: ComponentProps<typeof DeviceCard>["device"];
}

export default function DeviceDetailCard({ device }: DeviceDetailCardProps) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<DeviceCard device={device} onClick={onOpen} />
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl">
				<ModalContent className="pb-6">
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								Dettagli {device.name}
							</ModalHeader>
							<ModalBody>
								<TableDevice />
							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
