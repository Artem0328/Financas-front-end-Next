import { IApiResponseConfig, ResponseMap } from "@/utils/interface"
import React from "react"

const ApiResponse = ({ config }: IApiResponseConfig) => {
	const errorResponse = (
		<p style={{ color: "#ff0000", float: "left" }}>{config.response}</p>
	)

	const sucessResponse = (
		<p style={{ color: "#019267", float: "left" }}>{config.response}</p>
	)

	const setResponse = (status: number): JSX.Element => {
		const response: ResponseMap = {
			200: sucessResponse,
			201: sucessResponse,
			403: errorResponse,
			404: errorResponse,
			409: errorResponse,
			500: errorResponse,
		}

		return response[status]
	}

	const ApiResponseComponent = ({ status }: { status: number }) => {
		return <>{setResponse(status)}</>
	}

	return <ApiResponseComponent status={config.statusCode} />
}

export default ApiResponse
