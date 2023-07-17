import React, { useEffect, useState } from 'react';

const CustomPopupMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      if (selection && selection.toString()) {
        const range = selection.getRangeAt(0).getBoundingClientRect();
        setMenuPosition({
          x: range.x + range.width / 2,
          y: range.y - 30, // Adjust the y-offset to position the menu correctly
        });
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    document.addEventListener('mouseup', handleSelection);

    return () => {
      document.removeEventListener('mouseup', handleSelection);
    };
  }, []);

  return (
    <div>
      {showMenu && (
        <div
          style={{
            position: 'absolute',
            left: menuPosition.x,
            top: menuPosition.y,
            background: '#ffffff',
            boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.2)',
            padding: '10px',
            borderRadius: '4px',
          }}
        >
          <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
            <li
              style={{
                padding: '5px 0',
                borderBottom: '1px solid #eaeaea',
              }}
            >
              Option 1
            </li>
            <li
              style={{
                padding: '5px 0',
                borderBottom: '1px solid #eaeaea',
              }}
            >
              Option 2
            </li>
            <li style={{ padding: '5px 0' }}>Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomPopupMenu;