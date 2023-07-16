"use client"

import { Container, H1, Paragraph, Input, Button } from "../../atoms"
import React from "react"
import Icon from "@mdi/react"
import useAuth from "../../../hooks/useAuth"
import {
	mdiAccountOutline,
	mdiLockOutline,
	mdiEyeOffOutline,
	mdiEyeOutline,
} from "@mdi/js"
import { ILogin } from "../../../utils/interface"

const AcessArea = (config: ILogin) => {
	const { openRegisterArea, login } = useAuth()

	return (
		<Container typecontainers="loginContainer">
			<Container typecontainers="userInputContainer">
				<div className="text-center">
					<H1 className="!text-dark_green"> Entrar </H1>

					<Paragraph className="!text-medium_gray">
						Após o login você terá acesso as funcionalidades
					</Paragraph>
				</div>

				<Container typecontainers="inputContainer">
					<Input
						typeinput="loginInput"
						type="email"
						size="xl"
						value={config.email}
						onChange={(event: { target: { value: string } }) => {
							config.handleEmail(event.target.value)
						}}
					/>

					<Icon
						path={mdiAccountOutline}
						size={1}
						className="absolute top-[3.2rem] left-[1rem] text-gray3 transform"
					/>

					<Input
						typeinput="loginInput"
						type={config.type}
						id="pass"
						size="xl"
						value={config.password}
						onChange={(event: { target: { value: string } }) => {
							config.handlePassword(event.target.value)
						}}
					/>

					<Icon
						path={mdiLockOutline}
						size={1}
						className="absolute top-[9.2rem] left-[1rem] text-gray3 transform"
					/>

					<button
						className="absolute top-[9.2rem] left-[21rem] text-gray3 transform"
						onClick={() => config.showPassword()}>
						<Icon
							path={config.eyesIcon ? mdiEyeOutline : mdiEyeOffOutline}
							size={1}
						/>
					</button>

					{/* {config.statusCode > 0 && (
						<p
							className={
								config.statusCode == 201 ? "text-green-400" : "text-red"
							}>
							{config.apiResponse}
						</p>
					)} */}

					<Button
						color="gray"
						size="xl"
						disabled={!config.showButton}
						className={config.showButton ? "bg-light_green" : "bg-medium_gray"}
						onClick={() =>
							login({ email: config.email, password: config.password })
						}>
						Entrar
					</Button>
				</Container>

				<div className="flex flex-col -mt-8">
					<button
						className="font-bold text-light_green"
						onClick={() => openRegisterArea()}>
						Criar conta gratis
					</button>

					<button className="font-bold text-medium_gray">
						Esqueceu a senha ?
					</button>
				</div>
			</Container>
		</Container>
	)
}

export default AcessArea
