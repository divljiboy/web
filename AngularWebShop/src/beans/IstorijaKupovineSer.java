package beans;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.List;

public class IstorijaKupovineSer {
	private ArrayList<IstorijaKupovine> lista = new ArrayList<IstorijaKupovine>();
	    
		@SuppressWarnings("unchecked")
		public IstorijaKupovineSer(){
			FileInputStream fis = null;
		    ObjectInputStream in = null;
		    try {
		      fis = new FileInputStream("./istorija.ser");
		      in = new ObjectInputStream(fis);
		      lista = (ArrayList<IstorijaKupovine>) in.readObject();
		      in.close();
		    } catch (Exception ex) {
		      ex.printStackTrace();
		    }
		}
		public ArrayList<IstorijaKupovine> readData(){
			FileInputStream fis = null;
		    ObjectInputStream in = null;
		    try {
		      fis = new FileInputStream("./istorija.ser");
		      in = new ObjectInputStream(fis);
		      lista = (ArrayList<IstorijaKupovine>) in.readObject();
		      in.close();
		    } catch (Exception ex) {
		      ex.printStackTrace();
		    }
			return lista;
			
		}

		public ArrayList<IstorijaKupovine> getLista() {
			return lista;
		}

		public void setLista(ArrayList<IstorijaKupovine> lista) {
			this.lista = lista;
		}


		public void serijalizuj(ArrayList<IstorijaKupovine> trenutna) {
			String filename = "./istorija.ser";
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
