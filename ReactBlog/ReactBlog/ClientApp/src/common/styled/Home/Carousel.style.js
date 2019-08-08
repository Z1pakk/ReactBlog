import styled from "styled-components";

const CarouselWrapper = styled.div`
  .flickity-enabled.is-draggable {
    tap-highlight-color: transparent;
    user-select: none;
  }
  .flickity-enabled {
    position: relative;
  }
  .flickity-enabled:focus {
    outline: none;
  }
  .scrollable-nav {
    position: absolute;
    z-index: 999;
    top: calc(50% - 12px);
    right: 0;
    bottom: 0;
    width: 85px;
  }
  .scrollable-nav .next {
    display: inline-flex;
    padding: 12px;
    cursor: pointer;
    transition: all 0.2s ease;
    transform: rotate(-45deg);
    border: solid #dcdfe7;
    border-width: 0 8px 8px 0;
  }
  .scrollable-nav span:hover {
    padding: 8px;
    border: solid;
    border-width: 0 8px 8px 0;
  }
  .flickity-enabled.is-draggable .flickity-viewport {
    cursor: move;
    cursor: grab;
  }
  .flickity-viewport {
    overflow: hidden;
    position: relative;
    height: 100%;
  }

  .flickity-slider {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .section-scrollable .section-featured {
    width: 100%;
  }
  .section-featured {
    position: relative;
  }
 
  @media (min-width: 480px) {
    .section-scrollable.is-draggable + .scrollable-nav {
      display: initial;
    }
  }
`;

export { CarouselWrapper };
