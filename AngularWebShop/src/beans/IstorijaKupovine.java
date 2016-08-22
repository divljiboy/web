package beans;

import java.awt.List;
import java.io.Serializable;
import java.util.ArrayList;

public class IstorijaKupovine implements Serializable {
	/**
	 * 
	 */
	ArrayList<Kupovina> istorijaKup = new ArrayList<Kupovina>();
	
	private int sifra;
	
	private String dostavljac;
	
	private String dateTime;
	
	private String kupac;

	public String getDateTime() {
		return dateTime;
	}

	public void setDateTime(String dateTime) {
		this.dateTime = dateTime;
	}

	public String getDostavljac() {
		return dostavljac;
	}

	public void setDostavljac(String dostavljac) {
		this.dostavljac = dostavljac;
	}

	public int getSifra() {
		return sifra;
	}

	public void setSifra(int sifra) {
		this.sifra = sifra;
	}

	public ArrayList<Kupovina> getIstorijaKup() {
		return istorijaKup;
	}

	public void setIstorijaKup(ArrayList<Kupovina> istorijaKup) {
		this.istorijaKup = istorijaKup;
	}

	public String getKupac() {
		return kupac;
	}

	public void setKupac(String kupac) {
		this.kupac = kupac;
	}
	
}
