"use client";

import Loader from "@/components/loader/Loader";
import DeviceDetailCard from "@/components/modals/DeviceDetailCard";
import NewDeviceModal from "@/components/modals/NewDeviceModal";
import { fetcher } from "@/lib/fetcher";
import { IDevice } from "@/model/interfaces";
import React from "react";
import useSWR from "swr";

const DevicesPage = () => {
	const { data, isLoading } = useSWR<IDevice[]>("/api/device", fetcher, {
		refreshInterval: 15000,
	});

	return (
		<div className="relative w-full h-auto">
			<div className="flex flex-wrap gap-6">
				{data?.map((device, index) => {
					const num = index + 1;

					return (
						<DeviceDetailCard
							key={device.id + num}
							device={{
								...device,
								id: device.id + num,
								name: `${device.name} ${num}`,
							}}
						/>
					);
				})}
			</div>

			<Loader isVisible={isLoading} />

			<NewDeviceModal />
		</div>
	);
};

export default DevicesPage;
