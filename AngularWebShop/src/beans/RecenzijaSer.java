package beans;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.List;

public class RecenzijaSer {


	
    private	List<Recenzija> lista= new ArrayList<Recenzija>();
    
	@SuppressWarnings("unchecked")
	public RecenzijaSer(){
		FileInputStream fis = null;
	    ObjectInputStream in = null;
	    try {
	      fis = new FileInputStream("./recenzija.ser");
	      in = new ObjectInputStream(fis);
	      lista = (List<Recenzija>) in.readObject();
	      in.close();
	    } catch (Exception ex) {
	      ex.printStackTrace();
	    }
	}
	public List<Recenzija> readData(){
		FileInputStream fis = null;
	    ObjectInputStream in = null;
	    try {
	      fis = new FileInputStream("./recenzija.ser");
	      in = new ObjectInputStream(fis);
	      lista = (List<Recenzija>) in.readObject();
	      in.close();
	    } catch (Exception ex) {
	      ex.printStackTrace();
	    }
		return lista;
		
	}

	public List<Recenzija> getLista() {
		return lista;
	}

	public void setLista(List<Recenzija> lista) {
		this.lista = lista;
	}


	public void serijalizuj(List<Recenzija> trenutna) {
		String filename = "./recenzija.ser";
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
