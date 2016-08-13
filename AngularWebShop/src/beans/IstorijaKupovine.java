package beans;

import java.awt.List;
import java.io.Serializable;
import java.util.ArrayList;

public class IstorijaKupovine implements Serializable {
	/**
	 * 
	 */
	ArrayList<ArrayList<Kupovina>> istorijaKup = new ArrayList<ArrayList<Kupovina>>();
	
	private int sifra;
	
	

	public int getSifra() {
		return sifra;
	}

	public void setSifra(int sifra) {
		this.sifra = sifra;
	}

	public ArrayList<ArrayList<Kupovina>> getIstorijaKup() {
		return istorijaKup;
	}

	public void setIstorijaKup(ArrayList<ArrayList<Kupovina>> istorijaKup) {
		this.istorijaKup = istorijaKup;
	}
	
}
