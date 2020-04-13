import React from "react";
import homeImage from "./images/logo.png";
export const HomePage = () => {
  return (
    <div className="">
      <img src={homeImage} className="img" alt="" />
      <div className="home-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
          fermentum velit. Etiam felis ante, ultrices vitae turpis eu, convallis
          lobortis leo. Proin ornare lorem at odio mattis, ut rutrum massa
          rutrum. Nullam varius nunc laoreet, ultrices orci vel, luctus erat.
          Nam egestas tellus tortor, posuere mollis purus scelerisque vel.
          Vivamus eget augue mattis, accumsan felis ut, viverra nunc. Proin at
          felis id orci aliquam porttitor vitae fermentum neque. Aliquam
          pulvinar, mi at faucibus viverra, nisl magna dapibus ante, ac
          malesuada ligula lacus in felis. Pellentesque id odio ac ligula
          pharetra ultricies a non ipsum. Quisque venenatis libero nisl, sed
          fringilla lorem tincidunt a. Nullam in quam eu quam volutpat commodo
          vitae id risus. Mauris tempus eros eget elit ornare, sit amet congue
          risus lacinia. Integer id congue arcu. Nunc egestas laoreet placerat.
        </p>

        <p>
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Pellentesque ut ante metus. Vivamus vestibulum rutrum mi quis
          lobortis. Quisque vulputate lobortis tempor. Aliquam lobortis lectus
          sit amet felis pharetra, eget rutrum mi eleifend. Integer vulputate
          blandit ex vitae aliquam. In imperdiet nunc quis varius ornare. Nullam
          eget fermentum massa, eget auctor ipsum. Aliquam molestie iaculis
          eros, feugiat consequat magna pulvinar vel.
        </p>
      </div>
    </div>
  );
};
