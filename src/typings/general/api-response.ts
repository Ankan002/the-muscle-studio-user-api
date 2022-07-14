export type APIResponse<T> =
	| {
			success: true;
			message?: string;
			data: T;
	  }
	| {
			success: false;
			error: string;
			code: number;
	  };
