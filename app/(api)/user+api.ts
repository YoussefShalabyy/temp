import { neon } from '@neondatabase/serverless';

export async function POST(request:Request) {
    try {
    const sql = neon(`${process.env.DATABASE_URL}` );
    const {name, email,clerk_id}=await request.json();

    

    if (!name||!email||!clerk_id) 
        return Response.json({error:"missing required field"},{status:400});
    
    const response= await sql`
     INSERT INTO users(name,email,clerk_id)
     VALUES (${name},${email},${clerk_id})
    `;
     
    return new Response(JSON.stringify({data:response}),{status:201})
        
    } catch (error) {
        console.log(error);
    }
}