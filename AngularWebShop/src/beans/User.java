package beans;

import java.io.Serializable;

public class User implements Serializable{
	private String  username;
	
	private String email;
	
	private String password;
	
	private String role;
	
	private String prodavnica;
	private int sifra;
	
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getSifra() {
		return sifra;
	}
	public void setSifra(int sifra) {
		this.sifra = sifra;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getProdavnica() {
		return prodavnica;
	}
	public void setProdavnica(String prodavnica) {
		this.prodavnica = prodavnica;
	}
	
}
