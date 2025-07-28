# Payroll Setup

The Payroll module allows you to configure salary components for your organization.

Before running payroll:
- You must **create a custom setup**, or  
- **Select a standard payroll template**.

Each setup includes:
- **Earnings** like Basic, HRA, Bonus  
- **Deductions** like PF, Professional Tax  
- **Calculated values** like Total, Gross  

> ⚠️ Once setup is completed, it can only be updated — not recreated.

---

## Example of Payroll Setup
| Type         | Components | Percentage (%) | Maximum | Calculation                         |
|--------------|------------|----------------|---------|-------------------------------------|
| earnings     | Basic      | 60             | -       | -                                   |
| earnings     | HRA        | 30             | -       | -                                   |
| earnings     | Others     | 12             | -       | -                                   |
| earnings     | Bonus      | 10             | 10000   | -                                   |
| deductions   | PF         | 12             | -       | -                                   |
| total        | -          | 0              | -       | sum(earnings) - sum(deductions)     |
| gross        | -          | 0              | -       | sum(earnings)                        |


## 👇 Get Started

- [Create Setup →](/payroll/create.md)
- [Update Setup →](/payroll/update.md)
- [Fetch Setup →](/payroll/get.md)

---

Want to explore other modules?  
→ [Back to Modules Index](/)
