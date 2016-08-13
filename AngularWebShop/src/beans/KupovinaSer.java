package beans;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.List;

public class KupovinaSer {
private	List<Kupovina> lista= new ArrayList<Kupovina>();
    
	@SuppressWarnings("unchecked")
	public KupovinaSer(){
		FileInputStream fis = null;
	    ObjectInputStream in = null;
	    try {
	      fis = new FileInputStream("./kupovina.ser");
	      in = new ObjectInputStream(fis);
	      lista = (List<Kupovina>) in.readObject();
	      in.close();
	    } catch (Exception ex) {
	      ex.printStackTrace();
	    }
	}
	public List<Kupovina> readData(){
		FileInputStream fis = null;
	    ObjectInputStream in = null;
	    try {
	      fis = new FileInputStream("./kategorija.ser");
	      in = new ObjectInputStream(fis);
	      lista = (List<Kupovina>) in.readObject();
	      in.close();
	    } catch (Exception ex) {
	      ex.printStackTrace();
	    }
		return lista;
		
	}

	public List<Kupovina> getLista() {
		return lista;
	}

	public void setLista(List<Kupovina> lista) {
		this.lista = lista;
	}


	public void serijalizuj(List<Kupovina> trenutna) {
		String filename = "./kupovina.ser";
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
