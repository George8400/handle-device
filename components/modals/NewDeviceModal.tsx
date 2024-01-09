"use client";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
	Input,
	Tooltip,
} from "@nextui-org/react";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

export default function NewDeviceModal() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	const [name, setName] = useState("");
	const [other, setOther] = useState("");

	const onSubmit = () => {
		alert(name + " " + other);
	};

	const onOpenChangeMiddleware = () => {
		setName("");
		setOther("");
		onOpenChange();
	};

	return (
		<>
			<Tooltip
				content="Add new device"
				placement="top-start"
				size="sm"
				color="primary"
			>
				<Button
					color="primary"
					size="sm"
					onPress={onOpen}
					isIconOnly
					radius="full"
				>
					<Plus size={18} />
				</Button>
			</Tooltip>
			<Modal isOpen={isOpen} onOpenChange={onOpenChangeMiddleware}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								Aggungi un nuovo dispositivo
							</ModalHeader>
							<ModalBody>
								<div className="space-y-6 pb-10">
									<Input
										label="Nome"
										placeholder="Aggiungi nome dispositivo"
										required
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
									<Input
										label="Altro dato"
										placeholder="Aggiungi altro dato"
										required
										value={other}
										onChange={(e) => setOther(e.target.value)}
									/>
								</div>
							</ModalBody>
							<ModalFooter>
								<Button color="danger" variant="light" onPress={onClose}>
									Chiudi
								</Button>
								<Button color="primary" onPress={onSubmit}>
									Aggiungi
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
