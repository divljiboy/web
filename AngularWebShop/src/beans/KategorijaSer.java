package beans;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.List;

public class KategorijaSer {


    private	List<Kategorija> lista= new ArrayList<Kategorija>();
    
	@SuppressWarnings("unchecked")
	public KategorijaSer(){
		FileInputStream fis = null;
	    ObjectInputStream in = null;
	    try {
	      fis = new FileInputStream("./kategorija.ser");
	      in = new ObjectInputStream(fis);
	      lista = (List<Kategorija>) in.readObject();
	      in.close();
	    } catch (Exception ex) {
	      ex.printStackTrace();
	    }
	}
	public List<Kategorija> readData(){
		FileInputStream fis = null;
	    ObjectInputStream in = null;
	    try {
	      fis = new FileInputStream("./kategorija.ser");
	      in = new ObjectInputStream(fis);
	      lista = (List<Kategorija>) in.readObject();
	      in.close();
	    } catch (Exception ex) {
	      ex.printStackTrace();
	    }
		return lista;
		
	}

	public List<Kategorija> getLista() {
		return lista;
	}

	public void setLista(List<Kategorija> lista) {
		this.lista = lista;
	}


	public void serijalizuj(List<Kategorija> trenutna) {
		String filename = "./kategorija.ser";
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
