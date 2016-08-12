package beans;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.List;

import beans.Prodavnica;

public class ShopSer {
	

    private	List<Prodavnica> lista= new ArrayList<Prodavnica>();
    
	@SuppressWarnings("unchecked")
	public ShopSer(){
		FileInputStream fis = null;
	    ObjectInputStream in = null;
	    try {
	      fis = new FileInputStream("./shop.ser");
	      in = new ObjectInputStream(fis);
	      lista = (List<Prodavnica>) in.readObject();
	      in.close();
	    } catch (Exception ex) {
	      ex.printStackTrace();
	    }
	}
	public List<Prodavnica> readData(){
		FileInputStream fis = null;
	    ObjectInputStream in = null;
	    try {
	      fis = new FileInputStream("./shop.ser");
	      in = new ObjectInputStream(fis);
	      lista = (List<Prodavnica>) in.readObject();
	      in.close();
	    } catch (Exception ex) {
	      ex.printStackTrace();
	    }
		return lista;
		
	}

	public List<Prodavnica> getLista() {
		return lista;
	}

	public void setLista(List<Prodavnica> lista) {
		this.lista = lista;
	}


	public void serijalizuj(List<Prodavnica> trenutna) {
		String filename = "./shop.ser";
	    FileOutputStream fos = null;
	    ObjectOutputStream out = null;
	    
	    try {
			fos = new FileOutputStream(filename);
			out= new ObjectOutputStream(fos);
			out.writeObject(trenutna);
			out.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
}
