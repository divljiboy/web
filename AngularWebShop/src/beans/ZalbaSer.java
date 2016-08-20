package beans;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.List;

public class ZalbaSer {
private	List<Zalba> lista= new ArrayList<Zalba>();
    
	@SuppressWarnings("unchecked")
	public ZalbaSer(){
		FileInputStream fis = null;
	    ObjectInputStream in = null;
	    try {
	      fis = new FileInputStream("./zalba.ser");
	      in = new ObjectInputStream(fis);
	      lista = (List<Zalba>) in.readObject();
	      in.close();
	    } catch (Exception ex) {
	      ex.printStackTrace();
	    }
	}
	public List<Zalba> readData(){
		FileInputStream fis = null;
	    ObjectInputStream in = null;
	    try {
	      fis = new FileInputStream("./zalba.ser");
	      in = new ObjectInputStream(fis);
	      lista = (List<Zalba>) in.readObject();
	      in.close();
	    } catch (Exception ex) {
	      ex.printStackTrace();
	    }
		return lista;
		
	}

	public List<Zalba> getLista() {
		return lista;
	}

	public void setLista(List<Zalba> lista) {
		this.lista = lista;
	}


	public void serijalizuj(List<Zalba> trenutna) {
		String filename = "./zalba.ser";
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
