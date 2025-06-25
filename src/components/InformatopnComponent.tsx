import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";
import {SomeComponent} from "./ItemComponent.tsx";

export const InformatopnComponent = () => {
    const {theme}= useContext(MyContext)
    const darkTheme = 'bg-black text-white h-[90vh]';
    const whiteTheme = 'bg-white   h-[90vh]';
    const style = theme === 'dark' ? darkTheme : whiteTheme;

    return (
        <div   className={style}>
          <div>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eaque earum, error in ipsa ipsam labore laudantium nesciunt odio possimus quidem quod repellat repudiandae saepe sed tempore voluptatem? Accusantium, dolorem.

                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid animi architecto at commodi corporis dignissimos eveniet reprehenderit ullam! Et, rerum sed. Accusantium ad architecto doloremque molestiae nobis quidem suscipit!            </p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam consectetur delectus dignissimos ducimus hic, iusto laudantium magni minus, nam omnis quia quos reiciendis rem repudiandae suscipit, veritatis voluptas voluptate!
          </div>
            <SomeComponent/>
      </div>

    );
};