// ---------------------------------------- Generic Type

type ApiResponse<T extends object = {status: number}> = {  // Set default type <T = {status: number}> : Set extends to be object
    data: T,
    isError: boolean
}

// ---------------------------------------- Sub Type
type User = {
    name: string,
    age: number
}

type Blog = {
    title: string
}

type Status = {
    status: number
}


// ---------------------------------------- Usage Type 

type UserResponse = ApiResponse<User>;
type BlogResponse = ApiResponse<Blog>;
type StatusResponse = ApiResponse;


// ---------------------------------------- Usage
const userResponse: UserResponse = {
    data: {
        name: "Kyle",
        age: 32
    },
    isError: false
}

const blogResponse: BlogResponse = {
    data: {  
        title: "Hello"
    },
    isError: false
} 

const statusResponse: StatusResponse = {
    data: { 
        status: 200, 
    },
    isError: false
}

