import React from "react";

const PostsTable = ( props ) => {

   const { items, onDelete, onSort, sortIcon } = props;

   return (
       <table className="table">
           <thead>
           <tr>
               <th className="clicakble" onClick={() => onSort('id')} scope="col">Id {sortIcon('id')}</th>
               <th className="clicakble" onClick={() => onSort('title')} scope="col">Title {sortIcon('title')}</th>
               <th className="clicakble" onClick={() => onSort('text')} scope="col">Body {sortIcon('text')}</th>
           </tr>
           </thead>
           <tbody>
           {items.map((item, key) =>
               (
                   <tr key={key}>
                       <td>{item.id}</td>
                       <td>{item.title}</td>
                       <td>{item.body}</td>
                   </tr>
               ))}
           </tbody>
       </table>
   )
};

export default PostsTable;
