import { Avatar } from "@nextui-org/react";
import React from "react";

const teamData = [
	{
		name: "Francesco Nicoletti",
		position: "CO-CTO",
		image: "https://avatar.iran.liara.run/public/boy",
	},
	{
		name: "Giorgio Ubbriaco",
		position: "CO-CTO",
		image: "https://avatar.iran.liara.run/public/boy",
	},
	{
		name: "Amedeo Grandinetti",
		position: "CO-CTO",
		image: "https://avatar.iran.liara.run/public/boy",
	},
];

const TeamPage = () => {
	return (
		<div className="grid grid-cols-3 gap-6 justify-between">
			{teamData.map((member, index) => (
				<div key={index} className="flex flex-col items-center">
					<Avatar src={member.image} className="h-56 w-56" />
					<div className="text-center mt-4">
						<h4 className="text-lg font-bold">{member.name}</h4>
						<p className="text-sm text-gray-600">{member.position}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default TeamPage;
