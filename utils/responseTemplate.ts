class ActionResponse<T> {
  success: boolean
  message: string
  data: T | null

  //   initialize properties
  constructor(success: boolean, message: string, data: T | null) {
    this.success = success
    this.message = message
    this.data = data
  }

  //   create successful response
  static success(message: string, data: any = null) {
    return {
      success: true,
      message,
      data,
    }
  }

  //   create error response
  static error(message: string, data: any = null) {
    return {
      success: false,
      message,
      data,
    }
  }
}

export default ActionResponse
