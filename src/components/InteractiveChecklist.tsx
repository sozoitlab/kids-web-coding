import React, { useState } from 'react';
import styles from './InteractiveChecklist.module.css';

interface ChecklistItem {
  id: string;
  label: string;
  checked?: boolean;
}

interface InteractiveChecklistProps {
  title: string;
  items: ChecklistItem[];
}

export default function InteractiveChecklist({ title, items }: InteractiveChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    items.forEach(item => {
      initial[item.id] = item.checked || false;
    });
    return initial;
  });

  const handleToggle = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const allChecked = Object.values(checkedItems).every(checked => checked);
  const checkedCount = Object.values(checkedItems).filter(checked => checked).length;

  return (
    <div className={styles.checklist}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.progress}>
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill} 
            style={{ width: `${(checkedCount / items.length) * 100}%` }}
          />
        </div>
        <span className={styles.progressText}>
          {checkedCount} / {items.length} 完了
        </span>
      </div>
      <ul className={styles.items}>
        {items.map(item => (
          <li key={item.id} className={styles.item}>
            <label className={styles.label}>
              <input
                type="checkbox"
                checked={checkedItems[item.id] || false}
                onChange={() => handleToggle(item.id)}
                className={styles.checkbox}
              />
              <span className={checkedItems[item.id] ? styles.checked : ''}>
                {item.label}
              </span>
            </label>
          </li>
        ))}
      </ul>
      {allChecked && (
        <div className={styles.complete}>
          🎉 すべてチェック完了！公開の準備ができました！
        </div>
      )}
    </div>
  );
}