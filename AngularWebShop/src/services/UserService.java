package services;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import org.json.simple.JSONObject;

import beans.Prodavnica;
import beans.User;
import beans.UserSer;


import java.util.List;


@Path("/user")
public class UserService {
	
	@Context
	HttpServletRequest request;
	@Context
	ServletContext ctx;
	
	UserSer user;
	
	@POST
	@Path("/addUser")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public String addUser(User p) {
		System.out.println("sign up");
		List<User> users=getUsers();
		JSONObject obj1 = new JSONObject();
		JSONObject obj = new JSONObject();
		boolean istina = false;
		//obj.put("status", "ok");
		for(int i = 0; i < users.size();i++){
			if(p.getUsername().equals(users.get(i).getUsername())){
				return "ok";
				
			}
		}
		
		if (users.size() == 0) {
			p.setSifra(1);
		} else {
			 p.setSifra(users.get(users.size() - 1).getSifra() + 1);
		};
		
		p.setRole("korisnik");
		users.add(p);
		
		obj.put("status", "ok");
		ctx.setAttribute("user", users);
		user.serijalizuj(users);
		return obj.toString();
	}
	
	@POST
	@Path("/authenticate")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public JSONObject loginUser(User p) {
		List<User> users=getUserss();
		boolean userFind = false;
		JSONObject obj = new JSONObject();
		int broj = 0;
		for(int i = 0; i < users.size(); i++ ){
			if(users.get(i).getUsername().equals(p.getUsername())){
				if(users.get(i).getPassword().equals(p.getPassword())){
					broj =i;
					userFind = true;
					break;
				}
			}
		}
		if(!userFind){
		return (JSONObject) obj.put("status", "error");
		}
		
		
			if(p.getPassword().equals("admin") && p.getUsername().equals("admin")){
				JSONObject object = new JSONObject();
				object.put("status","ok");
				object.put("username", "admin");
				object.put("password","admin");
				object.put("role", "admin");
				return object;
			}
		
		
		JSONObject response = new JSONObject();
		response.put("status", "ok");
		response.put("username",p.getUsername());
		response.put("password",p.getPassword());
		
		response.put("role", users.get(broj).getRole());
		if(users.get(broj).getRole().equals("prodavac")){
			response.put("prodavnica",users.get(broj).getProdavnica());
		}
		
		return response ;
		
		
	}
	
	@GET
	@Path("/getUsers")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public List<User> getUserss(){
		return getUsers();
		
	}
	@POST
	@Path("/postUsers/{user}/{shop}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public JSONObject postUser(@PathParam("user") String korisnik,@PathParam("shop")String shop){
		List<User> trenutna = getUsers();
		JSONObject obj = new JSONObject();
		System.out.println(korisnik + " " +shop);
		for(int i = 0;i < trenutna.size();i++){
			if(trenutna.get(i).getUsername().equals(korisnik)){
				trenutna.get(i).setUsername(korisnik);
				trenutna.get(i).setRole("prodavac");
				trenutna.get(i).setProdavnica(shop);
			}
		}
		ctx.setAttribute("user", trenutna);
		user.serijalizuj(trenutna);
		return (JSONObject) obj.put("status","ok");
		
	}
	
	
	private List<User> getUsers() {
		user = new UserSer();
		ctx.setAttribute("user", user.getLista());
	
		return user.getLista();
	}
	
	
}
