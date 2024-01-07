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
import Line from "../chart/Line";

interface DeviceDetailCardProps {
	device: ComponentProps<typeof DeviceCard>["device"];
}

export default function DeviceDetailCard({ device }: DeviceDetailCardProps) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<DeviceCard
				device={device}
				onClick={onOpen}
				className="flex-grow basis-1/5 aspect-[3/4] max-h-[300px]"
			/>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				size="5xl"
				placement="top"
				classNames={{
					base: "bg-[#f5f5f5] max-w-[1280px]",
				}}
			>
				<ModalContent className="pb-6">
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								Dettagli {device.name}
							</ModalHeader>
							<ModalBody>
								<div className="flex gap-8">
									<TableDevice />

									<div className="space-y-2">
										<Line />
										<Line />
										<Line />
									</div>
								</div>
							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
