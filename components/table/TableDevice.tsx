"use client";

import React from "react";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
} from "@nextui-org/react";

interface TableDeviceProps {
	measurements?: {
		id: number;
		date: string;
		temperature: number;
		dissolvedMetal: number;
		ph: number;
	}[];
}

export default function TableDevice({ measurements }: TableDeviceProps) {
	return (
		<Table aria-label="Example static collection table">
			<TableHeader>
				<TableColumn>Temp.</TableColumn>
				<TableColumn>TDS</TableColumn>
				<TableColumn>pH</TableColumn>
			</TableHeader>
			<TableBody>
				<TableRow key="1">
					<TableCell>Tony Reichert</TableCell>
					<TableCell>CEO</TableCell>
					<TableCell>Active</TableCell>
				</TableRow>
				<TableRow key="2">
					<TableCell>Zoey Lang</TableCell>
					<TableCell>Technical Lead</TableCell>
					<TableCell>Paused</TableCell>
				</TableRow>
				<TableRow key="3">
					<TableCell>Jane Fisher</TableCell>
					<TableCell>Senior Developer</TableCell>
					<TableCell>Active</TableCell>
				</TableRow>
				<TableRow key="4">
					<TableCell>William Howard</TableCell>
					<TableCell>Community Manager</TableCell>
					<TableCell>Vacation</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
