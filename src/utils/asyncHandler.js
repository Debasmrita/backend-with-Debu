const asyncHandler =(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}


export {asyncHandler}

// const asyncHandler = () => {}
// const asyncHandler = (function) => () =>{}
// const asyncHandler = (function) => async ()=> {}

// const asyncHandler= (fn)=>async (req, res, next) =>{
//     try {
        
//     } catch (error) {
//         res.staus(error.code|| 500).json({
//             success:false,
//             message: error.message
//         })
//     }
// }