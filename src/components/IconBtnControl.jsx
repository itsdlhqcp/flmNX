// import React from 'react';
// import { Badge, Icon, IconButton, Tooltip, Whisper } from 'rsuite';

// const ConditionalBadge = ({condition, children}) => {
//   return condition ? <Badge content={condition}>{children}</Badge> : children;
// };

// const IconBtnControl = ({
//     isVisible,
//     iconName,
//     tooltip,
//     onclick,
//     badgeContent,
//     ...props
// }) =>{

//     return (
//         <div className='ml-2' style={{visibility: isVisible ? 'visible' : 'hidden'}}>

//             <ConditionalBadge condition={badgeContent}>
//                 <Whisper
//                 placement='top'
//                 delay={0}
//                 delayHide={0}
//                 delayShow={0}
//                 trigger="hover"
//                 speaker={<Tooltip>{tooltip}</Tooltip>}
//                 >

//                     <IconButton
//                     {...props} 
//                     onClick={onclick}
//                     circle
//                     size="xs"
//                     icon={<Icon icon={iconName}/>}
//                     />

//                 </Whisper>

//             </ConditionalBadge>
//         </div>
//     )



// }

// export default IconBtnControl;


import PropTypes from 'prop-types';
import { BsHeartPulse } from 'react-icons/bs';
import { Badge, IconButton, Tooltip, Whisper } from 'rsuite';

const ConditionalBadge = ({ condition, children }) => {
  return condition ? <Badge content={condition}>{children}</Badge> : children;
};

ConditionalBadge.propTypes = {
  condition: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  children: PropTypes.node.isRequired
};

const IconBtnControl = ({
  isVisible,
 // iconName,
  tooltip,
  onClick,
  badgeContent,
  ...props
}) => {
  return (
    <div className='ml-2' style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
      <ConditionalBadge condition={badgeContent}>
        <Whisper
          placement='top'
          delay={0}
          delayHide={0}
          delayShow={0}
          trigger="hover"
          speaker={<Tooltip>{tooltip}</Tooltip>}
        >
          <IconButton
            {...props}
            onClick={onClick}
            circle
            size="xs"
            icon={<BsHeartPulse />}
          />
        </Whisper>
      </ConditionalBadge>
    </div>
  );
}

IconBtnControl.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  
  tooltip: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  badgeContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  // Add any other props validation if needed
};

export default IconBtnControl;

