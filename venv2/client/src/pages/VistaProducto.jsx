import React from 'react';
import Navbar from "../components/Navbar";
import Bienvenida from "../components/Bienvenida";
import "../css/estilovistaproducto.css";
//import "../css/font-awesome.min.css";


function vistaproductoPage() {
  return (

    <div className="vista-producto">
        
      <div >
        <Navbar/>
      </div>

        <div className="container-title">Productos</div>

        <main>
          <div className="container-img">
            <img
              src="cuello-cerveza-artesanal1111.png"
              alt="imagen-producto"
            />
          </div>
          <div className="container-info-product">
            <div className="container-price">
              <span>$10.000</span>
              <i className="fa-solid fa-angle-right"></i>
            </div>

            <div className="container-add-cart">
              <div className="container-quantity">
                <input
                  type="number"
                  placeholder="1"
                  value="1"
                  min="1"
                  className="input-quantity"  
                />
                 
                <div class="btn-increment-decrement">
							<i class="fa-solid fa-chevron-up" id="increment"></i>
							<i class="fa-solid fa-chevron-down" id="decrement"></i>
						</div>
            
              </div>
              <br />
              <button className="btn-add-to-cart">
                <i className="fa-solid fa-plus"></i>
                Añadir al carrito
              </button>
            </div>

            <div className="container-description">
              <div className="title-description">
                <h4>Descripción</h4>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              <div className="text-description">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laboriosam iure provident atque voluptatibus reiciendis quae
                  rerum, maxime placeat enim cupiditate voluptatum, temporibus
                  quis iusto. Enim eum qui delectus deleniti similique? Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Sint autem
                  magni earum est dolorem saepe perferendis repellat ipsam
                  laudantium cum assumenda quidem quam, vero similique? Iusto
                  officiis quod blanditiis iste?
                </p>
              </div>
            </div>

           
          </div>
        </main>

        <section className="container-related-products">
          <h2>Productos Relacionados</h2>
          <div className="card-list-products">
            <div className="card">
              <div className="card-img">
                <img src="Pack-Cerveza-Rural.jpg" alt="producto-1" />
              </div>
              <div className="info-card">
                <div className="text-product">
                  <h3>Cerveza -----</h3>
                  <p className="category">Ver Producto</p>
                </div>
                <div className="price">$10.000</div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src="Pack-Cerveza-Rural.jpg" alt="producto-2" />
              </div>
              <div className="info-card">
                <div className="text-product">
                  <h3>Cerveza -----</h3>
                  <p className="category">Ver Producto</p>
                </div>
                <div className="price">$10.000</div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src="Pack-Cerveza-Rural.jpg" alt="producto-3" />
              </div>
              <div className="info-card">
                <div className="text-product">
                  <h3>Cerveza -----</h3>
                  <p className="category">Ver Producto</p>
                </div>
                <div className="price">$10.000</div>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img src="Pack-Cerveza-Rural.jpg" alt="producto-4" />
              </div>
              <div className="info-card">
                <div className="text-product">
                  <h3>Cerveza ------</h3>
                  <p className="category">Ver Producto</p>
                </div>
                <div className="price">$10.000</div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <p>Footer</p>
        </footer>


        <script
			src="https://kit.fontawesome.com/81581fb069.js"
			crossorigin="anonymous"
		></script>

    <script src='vistaproducto.js'></script>


      </div>  
  );
}

export default vistaproductoPage;