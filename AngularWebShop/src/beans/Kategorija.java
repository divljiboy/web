package beans;

import java.io.Serializable;

/** @pdOid 5787a727-924d-402d-8cf7-b541bfd20c0a */
public class Kategorija implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -3474565776835622370L;

	private int sifra;

	/** @pdOid 8192a5d9-ec5f-4da3-a664-576cfdbf5272 */
	private String naziv;
	/** @pdOid c2509586-ce90-43c7-aefc-76eb6225f584 */
	private String opis;

	/**
	 * @pdRoleInfo migr=no name=Kategorija assc=association3
	 *             coll=java.util.Collection impl=java.util.HashSet mult=0..*
	 */
	public Kategorija nadkategorija;

	public int getSifra() {
		return sifra;
	}

	public void setSifra(int sifra) {
		this.sifra = sifra;
	}

	public String getNaziv() {
		return naziv;
	}

	public void setNaziv(String newNaziv) {
		naziv = newNaziv;
	}

	public String getOpis() {
		return opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public Kategorija getNadkategorija() {
		return nadkategorija;
	}

	public void setNadkategorija(Kategorija nadkategorija) {
		this.nadkategorija = nadkategorija;
	}

}