import React,{useEffect, useState} from 'react';
 function Api(){
    const [user,setUser] = useState([]);
    const [gender, setGender] = useState("all")
  const [isLoading, setIsLoading] = useState(false);

  const fetchData =()=>{
    setIsLoading(true);
    fetch('https://randomuser.me/api/?results=20')
    .then((response) =>{
        return response.json();
    }).then((data)=>{
        let userdata = data.results
        setUser(userdata)
        setIsLoading(false)
    })
  }

  useEffect(()=>{
      fetchData();
  },[])
  useEffect(() => {

  }, [gender])

  let style={color:"white",textDecoration:"none",fontSize:"14px"}
   function Header(){
            return <div style={{backgroundColor:"black",display:"flex",justifyContent:'flex-end',height:"3rem"}} >
                <div style={{display:"flex",justifyContent:"space-evenly",width:"30vw",alignItems:"center"}}>
                    <a style={style} href="#">HOME</a>
                    <a style={style} href="#">PRODUCTS</a>
                    <a style={style} href="#">USER</a>
                    
                    <a style={style} href="#">CONTACT</a>
                    </div>
                </div>
        }

        function Main(){
            return <div style={{width:"90%",marginLeft:"5%"}}>
                <h2>User Details</h2>
                <p style={{color:"brown"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, eaque nulla eos error mollitia ullam sapiente deleniti perferendis quaerat nobis consequuntur magnam blanditiis debitis molestias quos dolores laudantium. Quibusdam, architecto!
Impedit ab eius enim fugit, fugiat facilis quod corrupti quia nostrum et, doloremque illum optio voluptatem, soluta molestias omnis dolore? Laudantium autem in eos molestias hic ad modi voluptas totam.
Obcaecati praesentium ex pariatur nostrum consequatur expedita eos et ducimus maiores quisquam iusto molestias autem incidunt necessitatibus, provident illum dignissimos nam, officia harum earum quas quo culpa labore facilis. Nostrum!
Officiis quos laboriosam atque voluptate tempore provident, asperiores magni nemo dolores nihil laudantium soluta, optio impedit fugit aperiam magnam ducimus nisi quis quod reprehenderit! Similique rerum inventore provident ullam maiores.
Repudiandae necessitatibus iure, dicta dolorum animi eos explicabo sed voluptates quibusdam numquam? Tempora ad eaque, delectus tenetur sit aspernatur laudantium porro iste assumenda veniam accusamus architecto non fuga, quos at?
 
 </p>
            </div>
        }

    return (
          <div className='body'>
           <div className='container'>
            <Header/>
            <Main/>
            
           <div className="radio-btn">
                    <div className="radio-container">
                        <input value="all" checked={gender === "all"} type="radio" onChange={(e) => {
                            setGender(e.target.value)

                        }} />
                        <label> ALL</label>
                    </div>

                    <div className="radio-container">
                        <input value="female" type="radio" checked={gender === "female"} onChange={(e) => {
                            setGender(e.target.value)



                        }} />
                        <label> Female</label>
                    </div>
                    <div className="radio-container">
                        <input value="male" type="radio" checked={gender === "male"} onChange={(e) => {
                            setGender(e.target.value)


                        }} />
                        <label> Male</label>
                    </div>

                </div>
            
       
           
            
              
              <div className='center-card'>
              
                
                <div className='table'>
                    <table>
                      <tr>
                        <th>User Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        
                      </tr>
                      {user && (gender !== "all"
								? user.filter(data => (data.gender === gender))
										.map(data => (<tr>
                                            <td><img variant="top" src={data.picture.large} alt="image" /></td>
                                            <td> <p>{data.name.first +" " +data.name.last}</p></td>
                                            <td> <h6> {data.email}</h6></td>
                                            <td> <p> {data.gender}</p></td>
                                           
                                          </tr>)) : user.map(data => (
                      <tr>
                        <td><img variant="top" src={data.picture.large} alt="image" /></td>
                        <td> <p>{data.name.first +" " +data.name.last}</p></td>
                        <td> <h6> {data.email}</h6></td>
                        <td> <p> {data.gender}</p></td>
                       
                      </tr> )))}
                    </table>
                </div>
              </div>
           
              
           </div>
            
        </div>
      );
 }
 export default Api