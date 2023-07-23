export async function authenticate() {
  try {

    const url = "https://trainer-portal.surajmehta6.repl.co/authenticate";
  
    const res = await  fetch(url, {
      method: "GET",
      credentials: "include",
    });
    const data  = await res.json();
  
    if (res.status === 401 && !res.ok) {
      return {data, status: false}
    } else if (res.status === 200 && res.ok) {
      return {data, status: true}
    };
  } catch(err) {
    console.log("err")
  }
}

