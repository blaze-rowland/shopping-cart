import { useState } from 'react';
import {
  ProductNav,
  ProductNavBody,
  ProductNavHeader,
  ProductNavSection,
  ProductNavTag,
  ProductNavTags,
} from './ProductNav.style';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ProductNavigationProps {}

export const ProductNavigation: React.FC<ProductNavigationProps> = () => {
  const [showBody, setShowBody] = useState<boolean>(false);

  return (
    <ProductNav>
      <ProductNavSection>
        <ProductNavHeader onClick={() => setShowBody(!showBody)}>
          <h4>Strain Type</h4>
          <FontAwesomeIcon icon={showBody ? faMinus : faPlus} />
        </ProductNavHeader>
        {showBody && (
          <ProductNavBody>
            <ProductNavTags>
              <ProductNavTag>Sativa</ProductNavTag>
              <ProductNavTag>Hybrid</ProductNavTag>
              <ProductNavTag>Indica</ProductNavTag>
              <ProductNavTag>CBD</ProductNavTag>
            </ProductNavTags>
          </ProductNavBody>
        )}
      </ProductNavSection>
    </ProductNav>
  );
};
