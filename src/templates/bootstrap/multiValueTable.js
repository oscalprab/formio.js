export default {
  form: `
<table class="table table-bordered">
  <tbody>
  {{rows}}
  <tr>
    <td colspan="2">
      <button class="btn btn-primary"><i class="glyphicon glyphicon-plus"></i> {{addAnother}}</button>
    </td>
  </tr>
  </tbody>
</table>
`,
};